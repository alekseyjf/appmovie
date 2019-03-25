export default function ({ store, redirect }) {
  // If the user is authenticated redirect to home page
  console.log('store.getters.retToken', store.getters.retToken);
  if (store.getters.retToken) {
  //if (localStorage.getItem('token')) {
    return redirect('/')
  }
}