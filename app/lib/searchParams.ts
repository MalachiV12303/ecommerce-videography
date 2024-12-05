import {  type SliderValue } from '@nextui-org/slider';
import { parseAsFloat, parseAsInteger, useQueryStates } from 'nuqs';
import {
  createParser,
  createSearchParamsCache,
  createSerializer,
  parseAsArrayOf,
  parseAsString
} from 'nuqs/server'
// import from 'nuqs/server' to avoid the "use client" directive

export const parseAsSliderValue = createParser({
  parse(queryValue) {
    const inBetween = queryValue.split(',')
    const isValid = inBetween.length === 2 && inBetween !== undefined
    if (!isValid) {
      return null
    }
    return <SliderValue>([parseFloat(inBetween[0]), parseFloat(inBetween[1])]);
  },
  serialize(value) {
    return value.toString()
  }
})

export const searchParams = {
  id: parseAsString.withDefault(''),
  search: parseAsString.withDefault(''),
  itemtype: parseAsString.withDefault('cam'),
  type: parseAsArrayOf(parseAsString).withDefault([]),
  brand: parseAsArrayOf(parseAsString).withDefault([]),
  price: parseAsSliderValue.withDefault(<SliderValue>([0, 3000])),
  res: parseAsArrayOf(parseAsString).withDefault([])
}


export const searchParamsCache = createSearchParamsCache({
  // List your search param keys and associated parsers here:
  id: parseAsString.withDefault(''),
  search: parseAsString.withDefault(''),
  itemtype: parseAsString.withDefault('cam'),
  type: parseAsArrayOf(parseAsString).withDefault([]),
  brand: parseAsArrayOf(parseAsString).withDefault([]),
  price: parseAsSliderValue.withDefault(<SliderValue>([0, 3000])),
  res: parseAsArrayOf(parseAsString).withDefault([])
})


export function useFilters() {
  return useQueryStates({
    type: searchParams.type.withOptions({shallow:false}),
    brand: searchParams.brand.withOptions({shallow:false}),
    price: searchParams.price.withOptions({shallow:false}),
    res: searchParams.res.withOptions({shallow:false})
  })
}

export const serialize = createSerializer(searchParams)