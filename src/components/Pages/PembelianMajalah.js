import React, { Component } from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native'
import { Container, Content, Header, Left, Right, Body, Title, Text, Button, List, ListItem, Icon, H1, H2} from 'native-base';
import {connect} from 'react-redux';
import { Actions } from 'react-native-router-flux';
import moment from 'moment'
import HTML from 'react-native-render-html'

class PembelianMajalah extends Component{
  render(){
    // let { title, date, content, better_featured_image } = this.props.postDetail
    const htmlContent = `Majalah SAWIT INDONESIA adalah majalah dengan fokus pemberitaan mengenai produk dan teknologi industri kelapa sawit. Majalah ini terbit setiap pertengahan bulan dan terbit edisi perdana Oktober 2011 dengan tiras 3.000 eksemplar per bulan. Pangsa pasar pembaca dari perusahaan perkebunan sawit, supporting industri sawit, pemerintah, dan petani. Majalah SAWIT INDONESIA didistribusikan pula kepada perusahaan perkebunan kelapa sawit yang langsung ditujukan kepada pemegang keputusan. Selain itu, majalah ini juga disebarkan ke toko buku seperti, Gramedia, Gunung Agung, dan outlet-outlet lainnya.
    <br/><br/>
    <strong>TARGET PEMBACA</strong>
    <ol>
       <li>Perusahaan perkebunan</li>
       <li>Perusahaa Suporting Industri &amp; Lembaga Pemerintahan</li>
    </ol>
    <ul>
       <li>Alat Berat</li>
       <li>Pembiayaan</li>
       <li>Pupuk  Sparepart PKS</li>
       <li>Agrochemical</li>
       <li>Bibit Sawit</li>
       <li>Exspedisi</li>
       <li>Pabrik Kelapa Sawit</li>
       <li>Angkutan Sawit (Otomotif)</li>
       <li>Konsultan Perkebunan</li>
       <li>Sertifikasi</li>
       <li>Lembaga Pemerintahan</li>
       <li>Lembaga Pendidikan</li>
       <li>Kedutaan Besar</li>
       <li>Asosiasi</li>
       <li>Petani</li>
    </ul>
    <strong>DISTRIBUSI</strong>
    <ol>
       <li>Jangkauan sirkulasi dan distribusi majalah SAWIT INDONESIA dititik beratkan diwilayah Jabodetabek, dan sentra-sentra perkebunan kelapa sawit seperti Sumatera Utara, Sumatera Selatan, Riau, Jambi, Lampung dan Kalimantan Tengah.</li>
       <li>Memiliki pembaca tetap sebanyak 1,200 exp didistribusikan secara gratis keperusahaan perkebunan kelapa sawit, supporting industri,organisasi, asosiasi, lembaga pemerintahan, peneliti, sehingga majalah SAWIT INDONESIA merupakan media iklan yang tepat bagi perusahaan Anda untuk promosi produk perusahaan atau program CSR dengan segmentasi industri kelapa sawit..</li>
       <li>Memperkenalkan produk perusahaan yang ditujukan langsung kepada para pengambil keputusan direksi perusahaan perkebunan kelapa sawit.</li>
    </ol>
    <strong>PROFIL PEMBACA</strong>
    <em>1. Strata Pendidikan</em>
    <ul>
       <li>Pasca Sarjana</li>
       <li>Sarjana</li>
       <li>Akademi</li>
       <li>SMA Sederajat</li>
       <li>Lain-lain</li>
    </ul>
    <em>2. Penghasilan</em>
    <ul>
       <li>Diatas Rp. 100jt</li>
       <li>Rp. 50jt - Rp. 99jt</li>
       <li>Rp. 25jt - Rp. 49jt</li>
       <li>Rp. 10jt – Rp. 24jt</li>
       <li>Kurang dari Rp. 10jt</li>
    </ul>
    <em>3. Jenis Pekerjaan</em>
    <ul>
       <li>Pengusaha/Pelaku Usaha</li>
       <li>Birokrat</li>
       <li>Wirausaha</li>
       <li>Akademi</li>
       <li>Lembaga Asing</li>
    </ul>
    <em>4. Gender</em>
    <ul>
       <li>Laki – laki : 70%</li>
       <li>Perempuan : 30%</li>
    </ul>
    <em>5. Usia</em>
    <ul>
       <li>Diatas 50 th</li>
       <li>40 th s/d 49 th</li>
       <li>30 th s/d 39 th</li>
       <li>Dibawah 20 th</li>
    </ul>
    <strong>SPESIFIKASI MAJALAH</strong>
    <br/>
    - Ukuran : 21 cm x 28 cm<br/>
    - Jumlah Halaman : 56 halaman termasuk cover<br/>
    - Periode Terbit : Bulanan (Pertengahan Bulan)<br/>
    - Kertas Cover : Art Carton 230 gram,<br/>
    - Vernish Glossy, Ful Colour<br/>
    - Isi : Art Paper 120 gram,<br/>
    - Oplah : 3.000 eksempelar/bulan<br/>
    - Harga Cover : Rp 25.000,-<br/>
    <em>Catatan: Harga belum termasuk biaya ongkos kirim luar jabodetabek</em>`;
    return(
      <Container>
        <Header style={styles.kurap}>
          <Left>
            <Button transparent onPress= {()=>Actions.pop()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Pembelian Majalah</Title>
          </Body>
          <Right>
          
          </Right>
        </Header>
        <Content>
        <Image source={{uri: 'https://sawitindonesia.com/wp-content/uploads/2018/05/IMG_4318.jpg'}} style={{height: 200, width: null, flex: 1}}/>
          <List>
            <ListItem>
              <HTML html={htmlContent} />
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  kurap: {  
    height: 85,
    paddingTop: 20,
    opacity: 60,
    // backgroundColor:"#d9534f",
  },
});
export default PembelianMajalah;
