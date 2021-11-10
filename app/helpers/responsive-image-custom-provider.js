import Helper from '@ember/component/helper';

export default class extends Helper {
  compute([model]) {
    const { image, blurhash } = model;

    return {
      imageTypes: ['original', 'jpeg', 'webp'],
      imageUrlFor() {
        return image;
      },
      lqip: {
        type: 'blurhash',
        hash: blurhash,
        width: 4,
        height: 3,
      },
    };
  }
}
