export default function ({ store, redirect }) {
  // If the user is authenticated redirect to home page
  console.log('store.state.auth', store.state.auth);
  if (store.state.token) {
  //if (localStorage.getItem('token')) {
    return redirect('/')
  }
}