function superbowlWin(superbowlResults) {
    const win = superbowlResults.find(result => result.result === "W");
    return win ? win.year : undefined;
}
