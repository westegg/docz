import { get } from 'lodash';

export const isFn = (value: any): boolean => typeof value === 'function';

export function flatArrFromObject<T>(arr: T[], prop: string): string[] {
  const reducer = (arr: string[], obj: T): string[] => {
    const value = get(obj, prop);
    return value ? arr.concat([value]) : arr;
  };
  return Array.from(new Set(arr.reduce(reducer, [])));
}

export function compare<T>(a: T, b: T, reverse?: boolean): number {
  if (a < b) return reverse ? 1 : -1;
  if (a > b) return reverse ? -1 : 1;
  return 0;
}
