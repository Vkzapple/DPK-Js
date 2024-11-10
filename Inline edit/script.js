let dataBuah = [];
let nomor = 1;

function tambahBuah() {
  const nama = document.getElementById("namaBuah").value;
  const jumlah = document.getElementById("jumlah").value;
  const gambar = document.getElementById("gambar").value;

  if (nama && jumlah && gambar) {
    const buah = {
      no: nomor,
      nama: nama,
      jumlah: jumlah,
      gambar: gambar,
      sedangEdit: false,
    };

    dataBuah.push(buah);
    nomor++;
    tampilkanData();
    bersihkanForm();
  } else {
    alert("Semua field harus diisi!");
  }
}

function tampilkanData() {
  const tabel = document.getElementById("tabelBuah");
  tabel.innerHTML = "";

  dataBuah.forEach((buah, index) => {
    const row = document.createElement("tr");
    const beratClass = parseFloat(buah.jumlah) > 5 ? "berat-merah" : "";

    if (buah.sedangEdit) {
      row.innerHTML = `
                        <td>${buah.no}</td>
                        <td><input type="text" value="${buah.nama}" id="editNama${index}" style="width: 90%;"></td>
                        <td><input type="number" value="${buah.jumlah}" id="editJumlah${index}" style="width: 50%;"></td>
                        <td><input type="text" value="${buah.gambar}" id="editGambar${index}" style="width: 90%;"></td>
                        <td class="action-buttons">
                            <button onclick="hapusBuah(${index})">Hapus</button>
                            <button onclick="simpanEdit(${index})">Save</button>
                        </td>
                    `;
    } else {
      row.innerHTML = `
                        <td>${buah.no}</td>
                        <td>${buah.nama}</td>
                        <td class="${beratClass}">${buah.jumlah}</td>
                        <td>${buah.gambar}</td>
                        <td class="action-buttons">
                            <button onclick="hapusBuah(${index})">Hapus</button>
                            <button onclick="mulaiEdit(${index})">Edit</button>
                        </td>
                    `;
    }

    tabel.appendChild(row);
  });
}

function bersihkanForm() {
  document.getElementById("namaBuah").value = "";
  document.getElementById("jumlah").value = "";
  document.getElementById("gambar").value = "";
}

function hapusBuah(index) {
  dataBuah.splice(index, 1);
  tampilkanData();
}

function mulaiEdit(index) {
  dataBuah[index].sedangEdit = true;
  tampilkanData();
}

function simpanEdit(index) {
  const nama = document.getElementById(`editNama${index}`).value;
  const jumlah = document.getElementById(`editJumlah${index}`).value;
  const gambar = document.getElementById(`editGambar${index}`).value;

  if (nama && jumlah && gambar) {
    dataBuah[index].nama = nama;
    dataBuah[index].jumlah = jumlah;
    dataBuah[index].gambar = gambar;
    dataBuah[index].sedangEdit = false;
    tampilkanData();
  } else {
    alert("Semua field harus diisi!");
  }
}
