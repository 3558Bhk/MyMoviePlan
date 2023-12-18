import { Component } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent {
  title= 'image-slider';

  imageSize: any = {
    width: 300, height: 428, space: 3
  }

  imageObject: Array<object> = [
    {
      image: 'https://th.bing.com/th/id/R.5c2521727831fd62f0010ef3d31867c6?rik=szWGW8hdw%2fwIdA&riu=http%3a%2f%2fwww.mx-4d.com%2fassets%2fgeostorm.jpg&ehk=CMyouZVxLw9RsPP2RRWOU8FsX9mux6DXa6Tk8ELYbJs%3d&risl=&pid=ImgRaw&r=0',
      thumbImage: 'https://th.bing.com/th/id/R.5c2521727831fd62f0010ef3d31867c6?rik=szWGW8hdw%2fwIdA&riu=http%3a%2f%2fwww.mx-4d.com%2fassets%2fgeostorm.jpg&ehk=CMyouZVxLw9RsPP2RRWOU8FsX9mux6DXa6Tk8ELYbJs%3d&risl=&pid=ImgRaw&r=0',
      alt: 'The GeoStorm',
      //title: 'Image 1'
    }, {
      image: 'https://assets.gadgets360cdn.com/pricee/assets/product/202207/Bachelor-poster_1658063701.jpg',
      thumbImage: 'https://assets.gadgets360cdn.com/pricee/assets/product/202207/Bachelor-poster_1658063701.jpg',
      //title: 'Image 2',
      alt: 'Bachelor'
    }, {
      image: '	https://th.bing.com/th/id/OIP.JFkaqUYJEonBdaLD-mSBPgHaKf?w=565&h=800&rs=1&pid=ImgDetMain',
      thumbImage: '	https://th.bing.com/th/id/OIP.JFkaqUYJEonBdaLD-mSBPgHaKf?w=565&h=800&rs=1&pid=ImgDetMain',
      //title: 'Image 3',
      alt: 'The Man Who Know Infinity'
    }, {
      image: 'https://assets.mycast.io/posters/secret-invasion-fan-casting-poster-226828-large.jpg?1660484942',
      thumbImage: 'https://assets.mycast.io/posters/secret-invasion-fan-casting-poster-226828-large.jpg?1660484942',
      //title: 'Image 4',
      alt: 'The Secret Invasion'
    }, {
      image: 'https://th.bing.com/th/id/OIP.kvPCoi0VNYbDIZ1MwGU4ZgHaJQ?rs=1&pid=ImgDetMain',
      thumbImage: 'https://th.bing.com/th/id/OIP.kvPCoi0VNYbDIZ1MwGU4ZgHaJQ?rs=1&pid=ImgDetMain',
      //title: 'Image 5',
      alt: 'The Fast and Furious 9'
    }, {
      image: 'https://cdn.cinematerial.com/p/297x/qoisbfnx/kantara-indian-movie-poster-md.jpg?v=1669611954',
      thumbImage: 'https://cdn.cinematerial.com/p/297x/qoisbfnx/kantara-indian-movie-poster-md.jpg?v=1669611954',
      //title: 'Image 6',
      alt: 'Kantara'
    }, {
      image: '	https://m.media-amazon.com/images/M/MV5BZDU0NGE5MDItN2UzNC00MDk5LThmNGUtYzdjYmExNzQ3YTcwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UY877_.jpg',
      thumbImage: '	https://m.media-amazon.com/images/M/MV5BZDU0NGE5MDItN2UzNC00MDk5LThmNGUtYzdjYmExNzQ3YTcwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UY877_.jpg',
      //title: 'Image 7',
      alt: 'After Earth'
    }, {
      image: '	https://www.cinetalkers.com/wp-content/uploads/2023/04/Dasara-on-Netflix.jpg',
      thumbImage: '	https://www.cinetalkers.com/wp-content/uploads/2023/04/Dasara-on-Netflix.jpg',
      //title: 'Image 8',
      alt: 'Dasara'
    }, {
      image: '	https://st1.bollywoodlife.com/wp-content/uploads/2019/07/super-30-3point5.jpg',
      thumbImage: 'https://st1.bollywoodlife.com/wp-content/uploads/2019/07/super-30-3point5.jpg',
      //title: 'Image 9',
      alt: 'Super30'
    }
];
}
