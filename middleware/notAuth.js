export default function ({ store, redirect }) {
  // If the user is not authenticated
  console.log('store.state.auth', store.state.auth);
  if (!store.state.token) {
  //if (!localStorage.getItem('token')) {
    return redirect('/sign-in')
  }
}