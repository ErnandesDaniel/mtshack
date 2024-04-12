function standardizeString(string) {
    string = string.replace(/\s+/g, ' ');
    if (string[0] == ' ')
        string = string.slice(1);
    string = string.toLowerCase();
    return string;
}
//# sourceMappingURL=standardizeString.js.map