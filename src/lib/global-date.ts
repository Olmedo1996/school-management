import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'

const locales = {
    'en-US': enUS,
}

export const globalDate = {
    format,
    parse,
    startOfWeek,
    getDay,
    locales
}