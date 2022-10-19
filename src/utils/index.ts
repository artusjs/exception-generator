const upperFirstCase = (val: string) => {
  return val[0].toUpperCase() + val.slice(1).toLowerCase()
}

const splitCodeString = (val: string): string[] => {
  return val.split(/[._-]/g)
}

export const toLowerCamelCase = (val: string): string => {
  const codeStringArr = splitCodeString(val)
  return codeStringArr[0].toLowerCase() + codeStringArr.slice(1).map(v => upperFirstCase(v)).join('')
}

export const toUpperCamelCase = (val: string): string => {
  return splitCodeString(val).map(v => upperFirstCase(v)).join('')
}
