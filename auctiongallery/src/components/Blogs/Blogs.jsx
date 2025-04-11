import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CiHeart } from "react-icons/ci";
import { BsHeartFill } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
function AuctionApp() {
  const [itemsData, setItemsData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [disabledHearts, setDisabledHearts] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setItemsData(data))
      .catch((err) => console.error("Failed to load items:", err));
  }, []);

  const addToFavorites = (item) => {
    if (disabledHearts.includes(item.id)) return;

    setFavorites([...favorites, item]);
    setDisabledHearts([...disabledHearts, item.id]);
    toast.success(`${item.title} added to favorites!`);
  };

  const removeFavorite = (id) => {
    const removedItem = favorites.find((item) => item.id === id);
    setFavorites(favorites.filter(item => item.id !== id));
    setDisabledHearts(disabledHearts.filter(itemId => itemId !== id));
    toast.info(`${removedItem.title} removed from favorites.`);
  };

  const totalPrice = favorites.reduce((sum, item) => sum + item.currentBidPrice, 0);





  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-slate-100 min-h-screen">
      {/* Left Side */}
      <div className="md:w-2/3 bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-800"> Active Auctions</h2>
        <p className="text-gray-500 mb-4">Discover and bid on extraordinary items</p>

        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-600 border-b">
              <th className="py-2">Items</th>
              <th>Current Bid</th>
              <th>Time Left</th>
              <th>Bid Now</th>
            </tr>
          </thead>
          <tbody>
            {itemsData.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="py-3 flex items-center gap-2">
                  <img src={item.image} alt={item.title} className="w-10 h-10 rounded object-cover" />
                  <span>{item.title}</span>
                </td>
                <td>${item.currentBidPrice.toLocaleString()}</td>
                <td>{item.timeLeft}</td>
                <td>
                  <button
                    onClick={() => addToFavorites(item)}
                    disabled={disabledHearts.includes(item.id)}
                    className={`w-9 h-9 flex items-center justify-center rounded-full transition duration-200 ${
                      disabledHearts.includes(item.id)
                        ? " text-red-600 cursor-not-allowed"
                        : "hover:bg-gray-200 text-gray-600"
                    }`}
                  >
                    {disabledHearts.includes(item.id) ? (
    <BsHeartFill size={24} className="text-red-600" />
  ) : (
    <CiHeart size={30} />
  )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Right Side */}
      <div className="md:w-1/3 bg-white rounded-xl shadow p-6 h-fit">
  <h2 className="text-xl font-bold mb-3 text-gray-800">💙 Favorite Items</h2>

  {favorites.length === 0 ? (
    <div className="text-gray-500">No favorites yet</div>
  ) : (
    <ul className="space-y-3">
      {favorites.map((item) => (
        <li
          key={item.id}
          className="flex items-center justify-between border-b pb-2"
        >
          {/* Left: image + title + bids */}
          <div className="flex items-center space-x-3">
            <img
              src={item.image}
              alt={item.title}
              className="w-12 h-12 rounded object-cover"
            />
            <div>
              <p className="text-sm font-medium text-gray-800">
                {item.title}
              </p>
              <p className="text-sm text-gray-500">
                ${item.currentBidPrice.toLocaleString()} &nbsp; Bids: {item.bidsCount}
              </p>
            </div>
          </div>

          {/* Right: remove button */}
          <button
            onClick={() => removeFavorite(item.id)}
            className="text-red-500 hover:text-red-700 text-xl"
          >
            <ImCancelCircle size={25}/>
          </button>
        </li>
      ))}
    </ul>
  )}

  <div className="mt-4 font-semibold text-gray-800">
    Total bids Amount:{' '}
    <span className="text-green-600">
      ${totalPrice.toLocaleString()}
    </span>
  </div>
</div>

    </div>
  );
}

export default AuctionApp;

