import { GoodsItem } from './GoodsItem';

function GoodsList(props) {
  const { goods = [] } = props;

  if (!goods.length) {
    return <h3>Ooops somthing went wrong</h3>;
  }
  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export { GoodsList };
