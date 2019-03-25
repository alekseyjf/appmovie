export default function ({ store, redirect }) {
  // If the user is not authenticated
  // console.log('store.getters.retToken', store.getters.retToken);
  if (!store.getters.retToken) {
  //if (!localStorage.getItem('token')) {
    return redirect('/sign-in')
  }
}