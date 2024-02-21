export function withAuth(Component) {
  return function WithAuth(props) {
    const isLogin = false;

    if (!isLogin) return <div>Gagal Login</div>;

    return <Component {...props} />;
  };
}
