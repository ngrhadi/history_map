let modalWellcome = document.getElementById('modal-wellcome');
var searchBox = document.getElementById('search-box');

mapboxgl.accessToken = 'pk.eyJ1IjoibGFuZHN0YXRzIiwiYSI6ImNsbHd1cDV5czBmNjQzb2xlbnE4c2F6MDkifQ.8VJ8wEZCS_jJFbvtOXwSng';
const map = new mapboxgl.Map({
  container: 'map',
  zoom: 2, // starting zoom
  maxZoom: 10, // max zoom
  minZoom: 2, // min zoom
  pitch: 0,
  bearing: 0,
  center: [115, 1],
  style: 'mapbox://styles/mapbox/dark-v11',
  antialias: true, // create the gl context with MSAA antialiasing, so custom layers are antialiased
  projection: 'mercator'
})


map.boxZoom.isEnabled();
map.keyboard.enable();

map.addControl(
  new mapboxgl.NavigationControl({
    showCompass: true,
    fullscreenControl: false,
  })
);

const userLocation = () =>
  navigator.geolocation.getCurrentPosition(function (position) {
    const el = document.createElement('div');
    map.flyTo({
      center: [position.coords.longitude, position.coords.latitude],
      zoom: 5,
      bearing: 0,
      pitch: 45,
      duration: 9000,
    });
    el.classList.add('modal');
    setTimeout(() => {
      modalWellcome.classList.remove('hidden');
    }, 9000);
  });
userLocation();

function handleCloseModal() {
  modalWellcome.classList.add('hidden');
}

const data = {
  type: 'FeatureCollection',
  name: 'journey',
  features: [
    {
      type: 'Feature',
      properties: {
        id: 1,
        date: '1995-12-11',
        name_loc: 'OE OE OE',
        type: 'BORN',
        content:
          'I was born here son, fishermen environmentally make trigger me to have skills swimings',
      },
      bbox: [108.080959, -6.325041, 108.080959, -6.325041],
      geometry: {
        type: 'Point',
        coordinates: [108.080959, -6.325041],
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 2,
        date: '2010-04-12',
        name_loc: 'OE OE OE (2)',
        type: 'BORN',
        content:
          'Here is another born to me son, to understand how to live in the bad era like in your era read now, hopefully you can survive',
      },
      bbox: [108.480692, -6.747386, 108.480692, -6.747386],
      geometry: {
        type: 'Point',
        coordinates: [108.480692, -6.747386],
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 3,
        date: '2015-09-18',
        name_loc: 'MBC',
        type: 'FAMILY',
        content:
          'Another family when me have some school in university, not really university though but in another place on this city me have found another teacher for life',
      },
      bbox: [110.465051, -7.776037, 110.465051, -7.776037],
      geometry: {
        type: 'Point',
        coordinates: [110.465051, -7.776037],
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 5,
        date: '2019-02-13',
        name_loc: 'EVOLUTION',
        type: 'FAMILY',
        content:
          'And in here is the main test for make some interesting changes in my life',
      },
      bbox: [106.740189, -6.338732, 106.740189, -6.338732],
      geometry: {
        type: 'Point',
        coordinates: [106.740189, -6.338732],
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 6,
        date: '2019-07-25',
        name_loc: 'HISTORY NOT LIE',
        type: 'HISTORY',
        content:
          'You know Indonesia son? here I was know another Indonesia version from ex-GAM, and from there you will be cry, how actually scary of when Indonesia have been independent as a country',
      },
      bbox: [97.912004, 2.896805, 97.912004, 2.896805],
      geometry: {
        type: 'Point',
        coordinates: [97.912004, 2.896805],
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 7,
        date: '2020-07-13',
        name_loc: 'COLD PLACE AND MESOZOIC ERA',
        type: 'SUMMIT',
        content: "Up comming...... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
      },
      bbox: [120.133011, -1.163162, 120.133011, -1.163162],
      geometry: {
        type: 'Point',
        coordinates: [120.133011, -1.163162],
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 8,
        date: '2021-07-20',
        name_loc: 'CITY OF PANCASILA',
        type: 'HISTORY',
        content: "Up comming...... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
      },
      bbox: [121.656418, -8.839727, 121.656418, -8.839727],
      geometry: {
        type: 'Point',
        coordinates: [121.656418, -8.839727],
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 9,
        date: '2021-07-22',
        name_loc: 'ASTRONOMIA TRADITIONAL',
        type: 'SUMMIT',
        content: "Up comming...... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
      },
      bbox: [121.820152, -8.766963, 121.820152, -8.766963],
      geometry: {
        type: 'Point',
        coordinates: [121.820152, -8.766963],
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 10,
        date: '2021-10-14',
        name_loc: 'BARIER NATIONALISM AND DAYAK',
        type: 'HISTORY',
        content: "Up comming...... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
      },
      bbox: [115.696393, 3.906583, 115.696393, 3.906583],
      geometry: {
        type: 'Point',
        coordinates: [115.696393, 3.906583],
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 11,
        date: '2021-04-13',
        name_loc: 'ANGLE PLACE',
        type: 'LOVE',
        content: "Up comming...... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
      },
      bbox: [103.712712, -1.089762, 103.712712, -1.089762],
      geometry: {
        type: 'Point',
        coordinates: [103.712712, -1.089762],
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 12,
        date: '2022-05-05',
        name_loc: 'ALONE ENGINEER',
        type: 'LELAKU',
        content: "Up comming...... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
      },
      bbox: [101.576007, 3.150958, 101.576007, 3.150958],
      geometry: {
        type: 'Point',
        coordinates: [101.576007, 3.150958],
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 13,
        date: '2021-10-05',
        name_loc: 'EARTHQUAKE 1',
        type: 'HISTORY',
        content: "Up comming...... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
      },
      geometry: {
        coordinates: [117.57350596153401, 3.3337549931527946],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 14,
        date: '2021-10-06',
        name_loc: 'BORNEO WAS MODERN',
        type: 'HISTORY',
        content: "Up comming...... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
      },
      geometry: {
        coordinates: [116.88367827371411, -1.2651939359185462],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 15,
        date: '2017-09-15',
        name_loc: 'SUNDANESE WOMAN',
        type: 'HISTORY',
        content: "Up comming...... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
      },
      geometry: {
        coordinates: [107.03305755435264, -6.865957410368068],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 16,
        date: '2013-05-05',
        name_loc: 'SECOND SUMMIT CIREMAI',
        type: 'SUMMIT',
        content: "Up comming...... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
      },
      geometry: {
        coordinates: [108.41167269666443, -6.901975906232323],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 17,
        date: '2006-05-05',
        name_loc: 'NADRAN',
        type: 'HISTORY',
        content: "Up comming...... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
      },
      geometry: {
        coordinates: [108.08780974707196, -6.303316004881765],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 18,
        date: '2019-01-05',
        name_loc: 'MAHIKA FIRST TIME',
        type: 'LELAKU',
        content: "Up comming...... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
      },
      geometry: {
        coordinates: [108.0428162206615, -6.312861310765953],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 19,
        date: '2022-09-15',
        name_loc: 'BRI DELIMA',
        type: 'LELAKU',
        content: "Up comming...... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
      },
      geometry: {
        coordinates: [106.81427964161009, -6.216580369601047],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 20,
        date: '2017-09-01',
        name_loc: 'KAMOJANG',
        type: 'LELAKU',
        content: "Up comming...... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
      },
      geometry: {
        coordinates: [107.84648724560714, -7.151629833640186],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 21,
        date: '2018-12-20',
        name_loc: 'NUSAKAMBANGAN',
        type: 'HISTORY',
        content: "Up comming...... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
      },
      geometry: {
        coordinates: [109.03846949808354, -7.764227915563694],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 22,
        date: '2014-10-17',
        name_loc: 'MOCOPAT SYAFAAT',
        type: 'MAIYAH',
        content: "Up comming...... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
      },
      geometry: {
        coordinates: [110.32625351507772, -7.827532079660898],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 23,
        date: '2019-01-20',
        name_loc: 'BANGBANG WETAN',
        type: 'MAIYAH',
        content: "Up comming...... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
      },
      geometry: {
        coordinates: [112.76339288330564, -7.266090712185772],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 24,
        date: '2016-12-20',
        name_loc: 'GAMBANG SYAFAAT',
        type: 'MAIYAH',
        content: "Up comming...... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
      },
      geometry: {
        coordinates: [110.4220314940876, -6.989156111708681],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 25,
        date: '2016-12-26',
        name_loc: 'ZIAROH RA KARTINI',
        type: 'HISTORY',
        content: "Up comming...... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
      },
      geometry: {
        coordinates: [111.40692372049455, -6.863039720480003],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 26,
        date: '2013-08-24',
        name_loc: 'MBAH YAI NASIR',
        type: 'HISTORY',
        content: "Up comming...... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
      },
      geometry: {
        coordinates: [108.48006027325175, -6.747384251858364],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 27,
        date: '2016-10-20',
        name_loc: 'GN PRAU',
        type: 'SUMMIT',
        content: "Up comming...... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
      },
      geometry: {
        coordinates: [109.92181570291478, -7.18690573258624],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 28,
        date: '2018-12-20',
        name_loc: 'TREMBONO',
        type: 'HISTORY',
        content: "Up comming...... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
      },
      geometry: {
        coordinates: [110.66787179249138, -7.795601112039904],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 28,
        date: '2019-04-20',
        name_loc: 'JANDA TANGGUH',
        type: 'HISTORY',
        content: "Up comming...... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
      },
      geometry: {
        coordinates: [110.60190013058764, -7.703974126117927],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 29,
        date: '2015-10-27',
        name_loc: 'MAPALISTA',
        type: 'SUMMIT',
        content: "Up comming...... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
      },
      geometry: {
        coordinates: [110.43794852496666, -7.449872422331609],
        type: 'Point',
      },
    },
  ],
};

let input_search = '';

const capitalizeFirstLetter = (
  [first, ...rest],
  locale = navigator.language
) =>
  first === undefined ? '' : first.toLocaleUpperCase(locale) + rest.join('');

let boxInfo = document.getElementById('card-bottom');
function handleCloseCardBottom() {
  boxInfo.classList.add('hidden');
}
let headerInfoText = document.getElementById('header-info-marker');
let headerInfoDiv = document.getElementById('header-info-div');
let dateInfoText = document.getElementById('date-info');
let contentInfo = document.getElementById('content-info');

const showValueSearch = async () => {
  searchBox.innerHTML = '';
  let markerDetails = [];
  const ul = document.createElement('ul');
  await markerDetails.push(data.features);
  if (input_search.length > 0) {
    searchBox.classList.remove('hidden');
  } else {
    searchBox.classList.add('hidden');
  }
  ul.classList.add('markerDetails');
  let dataFilter = markerDetails[0]
    .map((d) => d)
    .filter((el) =>
      el.properties.name_loc
        .toLocaleLowerCase()
        .includes(input_search.toLowerCase())
    )
    .forEach((el) => {
      const li = document.createElement('li');
      li.classList.add('name_loc');

      const markers_name = document.createElement('h6');
      markers_name.innerText = capitalizeFirstLetter(
        el.properties.name_loc.toLowerCase()
      );
      markers_name.classList.add('markers_name');

      li.appendChild(markers_name);

      li.addEventListener('click', function () {
        let coordinates = el.geometry.coordinates;
        searchBox.classList.add('hidden');
        search.value = capitalizeFirstLetter(
          el.properties.name_loc.toLowerCase()
        );
        map.flyTo({
          center: [coordinates[0] - 0.08, coordinates[1]],
          zoom: 10,
          bearing: 90,
          pitch: 45,
          duration: 9000,
        });
        handleChangeTitle(el.properties.name_loc);

        const monthNames = [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ];
        const day = new Date(el.properties.date).getDate();
        const month = monthNames[new Date(el.properties.date).getMonth()];
        const year = new Date(el.properties.date).getFullYear();

        handleChangeDate(`${day}-${month}-${year}`);
        handleChangeContent(el.properties.content);
        if (coordinates) {
          setTimeout(() => {
            boxInfo.classList.remove('hidden');
          }, 5000);
        }
      });

      ul.appendChild(li);
    });
  searchBox.appendChild(ul);
};

async function handleChangeTitle(data) {
  headerInfoText.innerText = await data;
}
async function handleChangeDate(data) {
  dateInfoText.innerText = await data;
}
async function handleChangeContent(data) {
  contentInfo.innerText = await data;
}

const search = document.getElementById('search-loc');
search.addEventListener('input', (e) => {
  input_search = e.target.value;
  showValueSearch();
});

for (const feature of data.features) {
  // create a HTML element for each feature
  const el = document.createElement('div');
  if (feature.properties.type === 'BORN') {
    el.className = 'born';
  } else if (feature.properties.type === 'FAMILY') {
    el.className = 'family';
  } else if (feature.properties.type === 'LOVE') {
    el.className = 'love';
  } else if (feature.properties.type === 'HISTORY') {
    el.className = 'history';
  } else if (feature.properties.type === 'SUMMIT') {
    el.className = 'summit';
  } else if (feature.properties.type === 'LELAKU') {
    el.className = 'lelaku';
  } else if (feature.properties.type === 'MAIYAH') {
    el.className = 'maiyah';
  } else {
    el.className = 'marker';
  }

  // make a marker for each feature and add it to the map
  new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
}
