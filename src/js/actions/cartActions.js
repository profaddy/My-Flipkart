export function ADD_ITEM(item,totalItem) {
  console.log('test action hit')
 return {
  type: 'ADD_ITEM',
  payload:item,
 }
}