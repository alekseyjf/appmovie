export default function ({ store, redirect }) {
  // If the user is not authenticated
  console.log('store.state.auth', store.state.auth);
  if (!store.state.auth) {
  //if (!localStorage.getItem('token')) {
    return redirect('/login')
  }
}