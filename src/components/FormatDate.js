const FormatDate = ({date}) => {
    console.log(date)
    return new Date(date).toLocaleDateString('el-GR', {
        day : 'numeric',
        month : 'numeric',
        year : 'numeric'
    }).split(' ').join('/');
}

export default FormatDate;