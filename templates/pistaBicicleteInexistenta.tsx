import generateGoogleMapsLink from '../reusables/generateGoogleMapsLink';
import generateIntroduction from '../reusables/generateIntroduction';
import generateSignature from '../reusables/generateSignature';
import { reportedLocation, userPersonalData } from '../types';

const pistaBicicleteInexistenta = {
  title: 'Pistă de biciclete inexistentă',
  generator: (personal: userPersonalData, location: reportedLocation) => {
    const introduction = generateIntroduction(personal);
    const googleMapsLink = generateGoogleMapsLink(location.lat, location.lng);
    const signature = generateSignature(personal);
    return (
      `${introduction}\n\n` +
      `Vă scriu în legătură cu circulația bicicletelor din apropierea ${location.adresaLinie1}, link harta: ${googleMapsLink}\n\n` +
      `În prezent oricine circulă cu bicicleta sau trotineta electrică pe această stradă este pus în pericol de autovehiculele care circulă cu mare viteză. Situația curentă se poate vedea și în pozele atașate.\n\n` +
      `Doresc crearea unei piste de bicicletă separată și delimitată cu elemente de protectie de restul benzilor pentru a putea circula în siguranță cu bicicleta pe stradă:\n\n` +
      `- crearea unei piste de biciclete ce respectă standardele europene\n` +
      `- separarea pistei de biciclete de orice tip de trafic de mare viteză\n` +
      `- instalarea unor stâlpi sau unor borduri ce nu permit accesul mașinilor pe pistă\n` +
      `- avertizarea sau amendarea autovehiculelor oprite neregulamentar\n\n` +
      `${signature}`
    );
  },
  destination: (localitate: string, judet: string) => {
    switch (`${localitate} - ${judet}`) {
      case 'Bucharest - Sector 1':
        return [
          'contact@politialocalasector1.ro',
          'office@aspmb.ro',
          'registratura@primarias1.ro',
          'secretariat@adp-sector1.ro',
        ];
      case 'Bucharest - Sector 2':
        return [
          'office@politialocalas2.ro',
          'office@aspmb.ro',
          'infopublice@ps2.ro',
          'office@adp2.ro',
        ];
      case 'Bucharest - Sector 3':
        return [
          'secretariat@politialocala3.ro',
          'office@aspmb.ro',
          'relatiipublice@primarie3.ro',
          'domeniu.public@primarie3.ro',
        ];
      case 'Bucharest - Sector 4':
        return [
          'sesizari@politialocala4.ro',
          'office@aspmb.ro',
          'info@adp4.ro',
          'contact@ps4.ro',
          'info@totulverde.ro',
        ];
      case 'Bucharest - Sector 5':
        return [
          'politialocala@sector5.ro',
          'office@aspmb.ro',
          'sesizari@sector5.ro',
          'primarie@sector5.ro',
          'dadp@sector5.ro',
        ];
      case 'Bucharest - Sector 6':
        return [
          'office@politia6.ro',
          'office@aspmb.ro',
          'prim6@primarie6.ro',
          'contact@adps6.ro',
        ];
      default:
        return [];
    }
  },
};

export default pistaBicicleteInexistenta;
