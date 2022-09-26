const months = ['Jan','Feb','March','April','May','June','July','Aug','Sept','Oct','Nov','Dec']

export const parse_date=(date)=>{
    const postDate = new Date(date);
    return `${months[postDate.getMonth()]} ${postDate.getDay()}`
}