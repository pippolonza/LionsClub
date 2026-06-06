import json
import re
from urllib.parse import urlparse

DEDICATED = {
    "21066": "lionsmirandola.it",
    "21126": "lionsclubfoggia.it",
    "59800": "lionsclub-cosenzacastellosvevo.it",
    "72282": "lionsclubbagheria.it",
}

DISTRICT_DOMAINS = {
    "lionsclubs108ya.it": "lionsclubs108ya.it",
    "www.lions108ab.it": "lions108ab.it",
    "lions108ab.it": "lions108ab.it",
    "www.lions108yb.it": "lions108yb.it",
    "lions108yb.it": "lions108yb.it",
    "www.lions108ib2.it": "lions108ib2.it",
    "lions108ib2.it": "lions108ib2.it",
}


def domain_from_url(url):
    if not url or url == "#":
        return None
    u = url.strip()
    if u.startswith("lions.it/") or u.startswith("www.lions.it/"):
        return u.split("?")[0]
    if not re.match(r"^https?://", u, re.I):
        u = "https://" + u
    host = urlparse(u).netloc.lower().replace("www.", "")
    return host or None


def normalize_site(club):
    cid = str(club.get("id", ""))
    if cid in DEDICATED:
        return DEDICATED[cid]

    raw = club.get("site", "")
    if "lions.it/club/?id=" in raw:
        return f"lions.it/club/?id={cid}"

    host = domain_from_url(raw)
    if host in DISTRICT_DOMAINS.values() or host in DISTRICT_DOMAINS:
        # distretto generico: scheda ufficiale del singolo club
        return f"lions.it/club/?id={cid}"

    if host and "lions.it" not in host and "lionsclub" in host:
        return host

    if host:
        return host

    return f"lions.it/club/?id={cid}"


def normalize_club(c):
    city = (c.get("city") or "").strip()
    if city.lower() in ("italia", ""):
        city = (c.get("address") or "").replace("Club di ", "").strip() or city

    addr = (c.get("address") or "").strip()
    if addr.startswith("Club di "):
        addr = addr[8:].strip()
    if not addr or addr.lower() == city.lower():
        addr = city

    out = {
        "id": str(c["id"]),
        "name": c["name"],
        "city": city,
        "lat": c["lat"],
        "lng": c["lng"],
        "site": normalize_site(c),
        "address": addr,
        "country": "ITALIA",
    }
    return out


def load_existing():
    text = open("trova-club-data.js", encoding="utf-8").read()
    m = re.search(r"const clubs = (\[.*\]);", text, re.S)
    return json.loads(m.group(1))


def main():
    existing = [normalize_club(c) for c in load_existing()]
    new_raw = json.load(open("sud-italia-clubs.json", encoding="utf-8"))
    new_list = [normalize_club(c) for c in new_raw]

    by_id = {c["id"]: c for c in existing}
    added = updated = 0
    for c in new_list:
        if c["id"] in by_id:
            by_id[c["id"]] = c
            updated += 1
        else:
            by_id[c["id"]] = c
            added += 1

    merged = sorted(by_id.values(), key=lambda x: (x["country"], x["city"], x["name"]))
    # Mirandola esempio utente
    if "21066" in by_id:
        by_id["21066"] = {
            "id": "21066",
            "name": "MIRANDOLA",
            "city": "Mirandola",
            "lat": 44.880394,
            "lng": 11.076476,
            "site": "lionsmirandola.it",
            "address": "Via Dorando Pietri, 23",
            "country": "ITALIA",
        }
        merged = sorted(by_id.values(), key=lambda x: (x["country"], x["city"], x["name"]))

    compact = json.dumps(merged, ensure_ascii=False, separators=(",", ":"))
    open("trova-club-data.js", "w", encoding="utf-8").write(f"const clubs = {compact};\n")
    print(f"totale={len(merged)} aggiunti={added} aggiornati={updated}")

if __name__ == "__main__":
    main()
