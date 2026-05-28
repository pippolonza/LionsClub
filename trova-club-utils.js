window.clubSiteUrl = function (site) {
    if (!site || site === '#') return '';
    const s = String(site).trim();
    if (/^https?:\/\//i.test(s)) return s;
    if (s.startsWith('lions.it/')) return 'https://www.' + s;
    return 'https://' + s.replace(/^www\./, '');
};

window.isClubDirectoryLink = function (site) {
    return String(site || '').includes('lions.it/club/?id=');
};
