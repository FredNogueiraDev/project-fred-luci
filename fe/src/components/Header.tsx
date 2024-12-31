import Home from '../assets/icons/home.svg';

export function Header() {
  return (
    <header>
      <div className="page-details">
        <div className="title">
          <img src={Home} alt="Home" />
          <h1>Home</h1>
        </div>
        <h2>Acompanhe os pedidos dos clientes</h2>
      </div>
    </header>
  )
}
