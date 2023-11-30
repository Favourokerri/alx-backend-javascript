import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const arry = [];
  const classroom1 = new ClassRoom(19);
  const classroom2 = new ClassRoom(20);
  const classroom3 = new ClassRoom(34);
  arry.push(classroom1);
  arry.push(classroom2);
  arry.push(classroom3);
  return arry;
}
