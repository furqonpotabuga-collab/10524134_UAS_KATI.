// toggle class active
const navbarNav = document.querySelector('.navbar-nav');
//ketika hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klid diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector ('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})


{  
    let total = 0;
    
    function tambahKeKeranjang() {
        let nama = document.getElementById("namaProduk").value;
        let harga = parseInt(document.getElementById("hargaProduk").value);
        let jumlah = parseInt(document.getElementById("jumlahProduk").value);
        
        if (!nama || !harga || !jumlah) {
            alert("Mohon isi semua data produk!");
            return;
        }
        
        let subtotal = harga * jumlah;
        total += subtotal;
        
        let tabel = document.getElementById("tabelKeranjang").getElementsByTagName("tbody")[0];
        let row = tabel.insertRow();
        row.insertCell(0).textContent = nama;
        row.insertCell(1).textContent = "Rp " + harga.toLocaleString();
        row.insertCell(2).textContent = jumlah;
        row.insertCell(3).textContent = "Rp " + subtotal.toLocaleString();
        
        document.getElementById("totalHarga").textContent = total.toLocaleString();
        
        // Kosongkan input setelah tambah
        document.getElementById("namaProduk").value = "";
        document.getElementById("hargaProduk").value = "";
        document.getElementById("jumlahProduk").value = "";
    }
    
    function bayar() {
        if (total === 0) {
            alert("Keranjang masih kosong!");
            return;
        }
        alert("Pembayaran berhasil!\nTotal yang dibayar: Rp " + total.toLocaleString());
        document.getElementById("tabelKeranjang").getElementsByTagName("tbody")[0].innerHTML = "";
        total = 0;
        document.getElementById("totalHarga").textContent = "0";
    }
}
    