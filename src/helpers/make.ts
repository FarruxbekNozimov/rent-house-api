const fs = require('fs');
const path = require('path');

function makeFiles(folderName: string, name: string, props: object) {
  // ALL FUNCTIONS
  let mkDir = path.resolve(__dirname, '..', folderName);
  let readFromExample = (name: string) => {
    return fs
      .readFileSync(path.resolve(__dirname, 'example', name), 'utf8')
      .toString();
  };
  let replaceName = (content: string) => {
    let splitContent = content.split('\n');
    for (let i in splitContent) {
      if (splitContent[i].includes('from')) {
        splitContent[i] = splitContent[i].replace(
          /example./g,
          folderName + '.',
        );
      }
    }
    content = splitContent.join('\n');
    content = content
      .replace(/@Controller('example')/, `@Controller('${name}')`)
      .replace(/example/g, name[0].toLowerCase() + name.slice(1, name.length))
      .replace(/Example/g, name);
    return content;
  };

  let writeProps = (content: string) => {
    let propsArea: string = '';
    for (let i in props) {
      propsArea += `@Prop(${props[i][1]})\n\t${i}:${props[i][0]};\n\n\t`;
    }

    return content.replace(/'props'/, propsArea);
  };

  let writeCreateDto = (content: string) => {
    let str = '';
    for (let i in props) {
      str += `@ApiProperty({ example: "${props[i][2]}" })\n\t${i}: ${
        props[i][0].length > 10 ? 'number' : props[i][0]
      };\n\n\t`;
    }
    return content.replace(/'dto'/, str);
  };

  let writeUpdateDto = (content: string) => {
    let str = '';
    for (let i in props) {
      str += `@ApiProperty({ example: "${props[i][2]}" })\n\t${i}?: ${
        props[i][0].length > 10 ? 'number' : props[i][0]
      };\n\n\t`;
    }
    return content.replace(/'dto'/, str);
  };

  // FUNTIONS END

  try {
    fs.mkdirSync(mkDir);
  } catch (error) {
    console.log('Folder is already created.');
  }
  let controller = readFromExample('example.controller.ts');
  let module = readFromExample('example.module.ts');
  let service = readFromExample('example.service.ts');
  let schema = readFromExample('schemas/example.schema.ts');
  let createDtoFile = readFromExample('dto/create-example.dto.ts');
  let updateDtoFile = readFromExample('dto/update-example.dto.ts');

  // CREATE CONTROLLER FILE
  try {
    fs.writeFileSync(
      mkDir + `/${folderName}.controller.ts`,
      replaceName(controller),
    );
    console.log('Controller created');
  } catch (error) {
    console.log('Controllerda Yozishda xatolik');
  }

  // CREATE SERVICE FILE
  try {
    fs.writeFileSync(mkDir + `/${folderName}.service.ts`, replaceName(service));
    console.log('Service created');
  } catch (error) {
    console.log('Service Yozishda xatolik');
  }

  // CREATE MODULE FILE
  try {
    fs.writeFileSync(mkDir + `/${folderName}.module.ts`, replaceName(module));
    console.log('Module created');
  } catch (error) {
    console.log('Module Yozishda xatolik');
  }

  // CREATE SCHEMA
  try {
    try {
      fs.mkdirSync(mkDir + '/schemas');
      console.log('Schema created');
    } catch (error) {
      console.log('Schema Papka oldin bor edi.');
    }
    fs.writeFileSync(
      mkDir + `/schemas/${folderName}.schema.ts`,
      writeProps(replaceName(schema)),
    );
    console.log('Schema created');
  } catch (error) {
    console.log('Schema Yozishda xatolik');
  }

  // CREATE DTO FOLDER
  try {
    fs.mkdirSync(mkDir + '/dto');
    console.log('Dto created');
  } catch (error) {
    console.log('Dto Papka oldin bor edi.');
  }

  // CREATE CREATEDTO FILE
  try {
    fs.writeFileSync(
      mkDir + `/dto/create-${folderName}.dto.ts`,
      writeCreateDto(replaceName(createDtoFile)),
    );
    console.log('CreateDto created');
  } catch (error) {
    console.log('CreateDto Yozishda xatolik');
  }

  // CREATE UPDATEDTO FILE
  try {
    fs.writeFileSync(
      mkDir + `/dto/update-${folderName}.dto.ts`,
      writeUpdateDto(replaceName(updateDtoFile)),
    );
    console.log('UpdateDto created');
  } catch (error) {
    console.log('UpdateDto Yozishda xatolik');
  }
}

// USER
makeFiles('user', 'User', {
  first_name: ['string', '', 'Toshmat'],
  last_name: ['string', '', 'Eshmatov'],
  email: ['string', '', 'email@gmail.com'],
  phone: ['string', '', '887038006'],
  password: ['string', '', '123password'],
  ad_id: [
    'mongoose.Schema.Types.ObjectId',
    "[{ type: mongoose.Schema.Types.ObjectId, ref:'Ad'  }]",
    '507f1f77bcf86cd799439011',
  ],
  order_id: [
    'mongoose.Schema.Types.ObjectId',
    "[{ type: mongoose.Schema.Types.ObjectId, ref:'Order'  }]",
    '507f1f77bcf86cd799439011',
  ],
  notification_id: [
    'mongoose.Schema.Types.ObjectId',
    "[{ type: mongoose.Schema.Types.ObjectId, ref:'Notification'  }]",
    '507f1f77bcf86cd799439011',
  ],
  token: ['string', '', ''],
});

// ADMIN
makeFiles('admin', 'Admin', {
  full_name: ['string', '', 'Eshmat Toshmatov'],
  email: ['string', '', 'email@gmail.com'],
  phone: ['string', '', '887038006'],
  token: ['string', '', ''],
});

// RENT
makeFiles('rent', 'Rent', {
  region_id: [
    'mongoose.Schema.Types.ObjectId',
    "[{ type: mongoose.Schema.Types.ObjectId, ref:'Region'  }]",
    '507f1f77bcf86cd799439011',
  ],
  district_id: [
    'mongoose.Schema.Types.ObjectId',
    "[{ type: mongoose.Schema.Types.ObjectId, ref:'District'  }]",
    '507f1f77bcf86cd799439011',
  ],
  address: ['string', '', 'Str. 7 Shuhrat chorraha'],
  location: ['string', '', '41.40338-2.17403'],
  gas: ['boolean', '', 'true'],
  light: ['boolean', '', 'false'],
  water_cold: ['boolean', '', 'true'],
  water_hot: ['boolean', '', 'true'],
  conditioner: ['boolean', '', 'false'],
  freezer: ['boolean', '', 'true'],
  status: ['string', '', 'euroremont'],
  price: ['string', '', '65000'],
  square_meter: ['number', '', '5'],
  is_floor: ['boolean', '', 'true'],
  home_floor: ['number', '', '3'],
  total_floor: ['number', '', '5'],
  img: [
    'string',
    '',
    'https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg',
  ],
  user_id: [
    'mongoose.Schema.Types.ObjectId',
    "[{ type: mongoose.Schema.Types.ObjectId, ref:'User'  }]",
    '507f1f77bcf86cd799439011',
  ],
});

// AD
makeFiles('ad', 'Ad', {
  region_id: [
    'mongoose.Schema.Types.ObjectId',
    "[{ type: mongoose.Schema.Types.ObjectId, ref:'Region'  }]",
    '507f1f77bcf86cd799439011',
  ],
  district_id: [
    'mongoose.Schema.Types.ObjectId',
    "[{ type: mongoose.Schema.Types.ObjectId, ref:'District'  }]",
    '507f1f77bcf86cd799439011',
  ],
  address: ['string', '', 'Str. 7 Shuhrat chorraha'],
  location: ['string', '', '41.40338-2.17403'],
  gas: ['boolean', '', 'true'],
  light: ['boolean', '', 'false'],
  water_cold: ['boolean', '', 'true'],
  water_hot: ['boolean', '', 'true'],
  conditioner: ['boolean', '', 'false'],
  freezer: ['boolean', '', 'true'],
  status: ['string', '', 'euroremont'],
  price: ['string', '', '65000'],
  people: ['number', '5'],
  client_status: ['number', 'oilali'],
  square_meter: ['number', '', '5'],
  is_floor: ['boolean', '', 'false'],
  home_floor: ['number', '', '1'],
  total_floor: ['number', '', '1'],
  img: [
    'string',
    '',
    'https://res.cloudinary.com/brickandbatten/image/upload/c_scale,w_464,h_324,dpr_2/f_auto,q_auto/v1641000863/wordpress_assets/22826-ModContemporary-Accents_w-GauntletGray-a-ok.jpg?_i=AA',
  ],
  user_id: [
    'mongoose.Schema.Types.ObjectId',
    "[{ type: mongoose.Schema.Types.ObjectId, ref:'User'  }]",
    '507f1f77bcf86cd799439011',
  ],
});

// ORDER
makeFiles('order', 'Order', {
  seller_id: [
    'mongoose.Schema.Types.ObjectId',
    "[{ type: mongoose.Schema.Types.ObjectId, ref:'User'  }]",
    '507f1f77bcf86cd799439011',
  ],
  reciever_id: [
    'mongoose.Schema.Types.ObjectId',
    "[{ type: mongoose.Schema.Types.ObjectId, ref:'User'  }]",
    '507f1f77bcf86cd799439011',
  ],
});

// NOTIFICATION
makeFiles('notification', 'Notification', {
  user_id: [
    'mongoose.Schema.Types.ObjectId',
    "[{ type: mongoose.Schema.Types.ObjectId, ref:'User'  }]",
    '507f1f77bcf86cd799439011',
  ],
  appeal_id: [
    'mongoose.Schema.Types.ObjectId',
    "[{ type: mongoose.Schema.Types.ObjectId, ref:'User'  }]",
    '507f1f77bcf86cd799439011',
  ],
  description: ['string', '', 'This user following to you'],
});

// REGION
makeFiles('region', 'Region', {
  name: ['string', '', 'Toshkent'],
});

// DISTRICT
makeFiles('district', 'District', {
  name: ['string', '', 'Chilonzor'],
});
