import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://portalbr.akamaized.net/brasil/uploads/2019/02/05164624/FBR-a-marca-criadora-dos-t%C3%AAnis-sem-calcanhar.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao Carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://portalbr.akamaized.net/brasil/uploads/2019/02/05164624/FBR-a-marca-criadora-dos-t%C3%AAnis-sem-calcanhar.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao Carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://portalbr.akamaized.net/brasil/uploads/2019/02/05164624/FBR-a-marca-criadora-dos-t%C3%AAnis-sem-calcanhar.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao Carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://portalbr.akamaized.net/brasil/uploads/2019/02/05164624/FBR-a-marca-criadora-dos-t%C3%AAnis-sem-calcanhar.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao Carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://portalbr.akamaized.net/brasil/uploads/2019/02/05164624/FBR-a-marca-criadora-dos-t%C3%AAnis-sem-calcanhar.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao Carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}
