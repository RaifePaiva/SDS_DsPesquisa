import moment from 'moment';

export const formateDate = (date: string) => {

    return moment(date).format('DD/MM/YYYY HH:mm');


}