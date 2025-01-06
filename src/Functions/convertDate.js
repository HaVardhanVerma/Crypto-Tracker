export const convertDate = (date) => {
    var newDate = new Date(date);

    return newDate.getDate() + "/" + (newDate.getMonth() + 1);
}