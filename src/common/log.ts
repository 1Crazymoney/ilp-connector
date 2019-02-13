import createLogger from 'ilp-logger'

export const create = (namespace: string) => createLogger('connector:' + namespace)
