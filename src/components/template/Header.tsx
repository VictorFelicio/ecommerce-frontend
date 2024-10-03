import Logo from "../shared/Logo";
import IconCart from "../shared/IconCart";
import Link from "next/link";
// import useCarrinho from '@/data/hooks/useCarrinho'

export default function Header() {
  const qtdeItens = 0;
  // const { qtdeItens } = useCarrinho()
  return (
    <div
      className="flex h-20 flex-col"
      style={{
        background:
          "linear-gradient(90deg, #14002D 0%, #420093 50%, #14002D 100%)",
      }}
    >
      <div className="container flex flex-1 flex-col justify-center">
        <div className="flex items-center justify-between">
          <Logo />
          <Link href="/checkout/cart">
            <IconCart qtyItens={qtdeItens} />
          </Link>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-violet-600/20 via-violet-600/80 to-violet-600/20"></div>
    </div>
  );
}
