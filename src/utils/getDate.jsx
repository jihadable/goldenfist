export default function getDate(number){
    let day = new Date()
    day.setDate(day.getDate() - number)

    return day.toDateString().slice(4)
}