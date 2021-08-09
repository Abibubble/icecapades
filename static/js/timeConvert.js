const timeConverter = (score) => {
    var hours = Math.floor(score / 60);
    var minutes = score % 60;
    if (minutes < 10) {
        return hours + ":0" + minutes;
    }
    return hours + ":" + minutes;
}