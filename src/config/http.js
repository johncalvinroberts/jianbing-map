const prod = process.env.NODE_ENV === 'production'

export const baseUrl = prod ? '' : ''
