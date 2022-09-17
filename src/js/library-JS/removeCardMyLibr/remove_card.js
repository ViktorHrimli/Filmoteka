import { findRemoveCard } from './logicRemoveCard';

export function removeWatch(data) {
  return findRemoveCard('watch', data);
}

export function removeQueve(data) {
  return findRemoveCard('queve', data);
}
