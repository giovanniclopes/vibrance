import Aleph from "../../assets/logos/aleph.png";
import Darkside from "../../assets/logos/darkside.png";
import Intrinseca from "../../assets/logos/intrinseca.png";
import PipocaENanquim from "../../assets/logos/pipocaEnanquim.png";
import Saraiva from "../../assets/logos/saraiva.png";

export default function Partnerships() {
  return (
    <section className="my-24">
      <div className="flex items-center justify-center flex-col gap-12">
        <div>
          <h2 className="text-5xl text-product-purple-500 font-semibold">
            Parcerias
          </h2>
        </div>
        <div className="w-full flex items-center justify-center overflow-hidden px-8">
          <div className="grid grid-cols-5 items-center justify-center gap-16">
            <div>
              <img className="w-48" src={Aleph} alt="Aleph" />
            </div>
            <div>
              <img className="w-48" src={Darkside} alt="Darkside" />
            </div>
            <div>
              <img className="w-48" src={Intrinseca} alt="Intrinseca" />
            </div>
            <div>
              <img className="w-48" src={PipocaENanquim} alt="PipocaENanquim" />
            </div>
            <div>
              <img className="w-48" src={Saraiva} alt="Saraiva" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
