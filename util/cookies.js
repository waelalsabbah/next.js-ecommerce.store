import { cookies } from 'next/headers';

export function getCookie(title) {
  return cookies().get(title)?.value;
}
