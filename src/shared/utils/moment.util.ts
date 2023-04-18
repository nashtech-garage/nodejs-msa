import * as moment from 'moment-timezone'

export const TIME_ZONE = process.env.TZ || 'Asia/Ho_Chi_Minh'

moment.tz.setDefault(TIME_ZONE)

export default moment
