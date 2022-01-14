export const GAME_STATE = {
  IN_PROGRESS: "game-in-progress",
  PLAYER_WINS: "player-wins",
  PLAYER_LOSES: "player-loses",
};

export const HINTS = {
  HAS_4_LEGS: "Tiene 4 patas",
  FUR_COVERED: "Su cuerpo esta cubierto de pelo",
  DOMESTIC_ANIMAL: "Es un ainmal domestico",
  WILD_ANIMAL: "Es un animal salvaje",
  HAS_FEATHERS: "Tiene el cuerpo cubierto de plumas",
  HAS_HORNS: "Tiene cuernos en la cabeza",
  HAS_SCALES: "Tiene el cuerpo cubierto de escamas",
  AQUATIC_ANIMAL: "Vive en el agua. Es un animal acuatico.",
  COLD_WEATHER: "Generalmente vive en lugares frios",
};

export interface Animal {
  name?: string;
  imageUrl?: string;
  pressed?: boolean;
  hints: string[];
}

export const animals: Animal[] = [
  {
    name: "gato",
    imageUrl:
      "https://ca-times.brightspotcdn.com/dims4/default/870ca28/2147483647/strip/true/crop/2048x1108+0+0/resize/840x454!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F12%2Fa5%2F79e097ccf62312d18a025f22ce48%2Fhoyla-recuento-11-cosas-aman-gatos-top-001",
    hints: [HINTS.HAS_4_LEGS, HINTS.FUR_COVERED, HINTS.DOMESTIC_ANIMAL],
  },
  {
    name: "perro",
    imageUrl:
      "https://phantom-expansion.unidadeditorial.es/04d5a7930d32e4860ba7cf82291b9d30/resize/640/assets/multimedia/imagenes/2021/03/18/16160714974849.jpg",
    hints: [HINTS.HAS_4_LEGS, HINTS.FUR_COVERED, HINTS.DOMESTIC_ANIMAL],
  },
  {
    name: "caballo",
    imageUrl:
      "https://concepto.de/wp-content/uploads/2021/07/caballos-e1626738224231.jpg",
    hints: [HINTS.HAS_4_LEGS, HINTS.FUR_COVERED, HINTS.DOMESTIC_ANIMAL],
  },
  {
    name: "loro",
    imageUrl:
      "https://estaticos-cdn.elperiodico.com/clip/9a36bb77-0c88-4b3c-a7dc-f3d41dd85987_alta-libre-aspect-ratio_default_0.jpg",
    hints: [HINTS.HAS_FEATHERS, HINTS.DOMESTIC_ANIMAL],
  },
  {
    name: "cocodrilo",
    imageUrl:
      "https://cdni.rt.com/actualidad/public_images/2021.09/article/61400c73e9ff715a552891d1.jpg",
    hints: [HINTS.HAS_4_LEGS, HINTS.HAS_SCALES, HINTS.WILD_ANIMAL],
  },
  {
    name: "elefante",
    imageUrl: "https://static.dw.com/image/45665028_303.jpg",
    hints: [HINTS.HAS_4_LEGS, HINTS.WILD_ANIMAL],
  },
  {
    name: "tucan",
    imageUrl:
      "https://www.mascotadomestica.com/ezoimgfmt/i1.wp.com/www.mascotadomestica.com/wp-content/uploads/2016/11/rsz_maxresdefault-1.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-2&resize=580%2C381&ssl=1",
    hints: [HINTS.HAS_FEATHERS, HINTS.WILD_ANIMAL],
  },
  {
    name: "tiburon",
    imageUrl:
      "https://img.vixdata.io/pd/jpg-large/es/sites/default/files/n/nukumi_la_hembra_tiburon_reina_del_oceano.jpg",
    hints: [HINTS.AQUATIC_ANIMAL],
  },
  {
    name: "pinguino",
    imageUrl:
      "https://images.ecestaticos.com/pqIAcGCEagnkjdIBVKVbC9i5FH4=/0x0:1920x1278/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fe8e%2Fe27%2F2bf%2Fe8ee272bfd36f69679936351209d708c.jpg",
    hints: [HINTS.HAS_FEATHERS, HINTS.COLD_WEATHER],
  },
  {
    name: "trucha",
    imageUrl:
      "https://www.bioenciclopedia.com/wp-content/uploads/2016/12/Trucha.jpg",
    hints: [HINTS.AQUATIC_ANIMAL, HINTS.HAS_SCALES],
  },
  {
    name: "serpiente",
    imageUrl:
      "https://dam.ngenespanol.com/wp-content/uploads/2021/06/GettyImages-922865550.jpg",
    hints: [HINTS.WILD_ANIMAL, HINTS.HAS_SCALES],
  },
  {
    name: "tortuga",
    imageUrl:
      "https://www.ngenespanol.com/wp-content/uploads/2018/08/La-nueva-especie-de-tortuga-descubierta-en-las-Gal%C3%A1pagos-1280x720.jpg",
    hints: [HINTS.HAS_SCALES, HINTS.WILD_ANIMAL, HINTS.HAS_4_LEGS],
  },
  {
    name: "panda",
    imageUrl:
      "https://c.files.bbci.co.uk/20F6/production/_101583480_gettyimages-177841009.jpg",
    hints: [HINTS.WILD_ANIMAL, HINTS.HAS_4_LEGS, HINTS.FUR_COVERED],
  },
  {
    name: "jirafa",
    imageUrl:
      "https://www.bioenciclopedia.com/wp-content/uploads/2011/12/jirafa2-800.jpg",
    hints: [HINTS.WILD_ANIMAL, HINTS.FUR_COVERED, HINTS.HAS_4_LEGS],
  },
  {
    name: "conejo",
    imageUrl:
      "https://live.hsmob.io/storage/images/wakyma.com/wakyma.com_enfermedades-de-los-conejos-mas-frecuentes-1.jpg",
    hints: [HINTS.HAS_4_LEGS, HINTS.DOMESTIC_ANIMAL, HINTS.FUR_COVERED],
  },
  {
    name: "pirana",
    imageUrl:
      "https://3.bp.blogspot.com/-l_oOR5Ylw4w/Wl2lyQgvMMI/AAAAAAAAAwM/oyeQ9A8M1bwgUVbT8wHHUKekerfu6qKQQCLcBGAs/s1600/Piranha_02.jpg",
    hints: [HINTS.HAS_SCALES, HINTS.AQUATIC_ANIMAL, HINTS.WILD_ANIMAL],
  },
  {
    name: "bufalo",
    imageUrl:
      "https://dcom-prod.imgix.net/files/inline-images/1%20%283%29%20%281%29.jpg",
    hints: [
      HINTS.WILD_ANIMAL,
      HINTS.COLD_WEATHER,
      HINTS.FUR_COVERED,
      HINTS.HAS_4_LEGS,
      HINTS.HAS_HORNS,
    ],
  },
];

export const hiddenUrl =
  "https://previews.123rf.com/images/nexusby/nexusby1903/nexusby190300008/119103903-hide-icon-with-eye-hidden-content.jpg";
