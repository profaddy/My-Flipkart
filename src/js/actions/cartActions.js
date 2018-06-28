export function ADD_ITEM(item) {
  console.log('test action hit')
 return {
  type: 'ADD_ITEM',
  payload:item,
 }
}