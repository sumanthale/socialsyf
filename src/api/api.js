import axios from "axios";

export const getPlaceByLatLan = async (lat, lng) => {
  try {
    const { data } = await axios({
      url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyChKQRC17o-TBf_uJvmHrrE7miSWMWF7S4`,
    });
    let name = data?.plus_code?.compound_code;
    const nameArr = name.split(" ");
    nameArr.shift();
    name = nameArr.join("");

    return name;
  } catch (error) {
    console.log(error);
    return null;
  }
};
