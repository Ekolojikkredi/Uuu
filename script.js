// Bilgilendirme bölümleri için toggle işlevi
function toggleInfo(infoId) {
    const infoContent = document.getElementById(infoId);
    infoContent.classList.toggle('show');
}

// Öğrenci kaydını ve okul kaydını localStorage'a kaydetme işlemleri
document.getElementById('studentForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const studentData = {
        name: document.getElementById('studentName').value,
        email: document.getElementById('studentMail').value,
        school: document.getElementById('studentSchool').value,
    };
    localStorage.setItem('studentData', JSON.stringify(studentData));
    alert('Öğrenci Kaydınız Tamamlandı!');
});

document.getElementById('schoolForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const schoolData = {
        name: document.getElementById('schoolName').value,
        city: document.getElementById('schoolCity').value,
        district: document.getElementById('schoolDistrict').value,
        code: document.getElementById('schoolCode').value,
    };
    localStorage.setItem('schoolData', JSON.stringify(schoolData));
    alert('Okul Kaydınız Tamamlandı!');
});

// Atık girişini ve kredi hesaplamasını yapma
document.getElementById('wasteForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const wasteType = document.getElementById('wasteType').value;
    const wasteKg = parseFloat(document.getElementById('wasteKg').value);
    const wasteSorted = document.getElementById('wasteSorted').value;
    let credit = calculateCredit(wasteType, wasteKg, wasteSorted);
    
    // Atık ve kredi verisini localStorage'a kaydetme
    const wasteData = {
        type: wasteType,
        weight: wasteKg,
        sorted: wasteSorted,
        credit: credit
    };
    localStorage.setItem('wasteData', JSON.stringify(wasteData));

    alert(`Atık Girişi Yapıldı! Toplanan kredi: ${credit}`);
});

// Kredi hesaplama fonksiyonu
function calculateCredit(type, weight, sorted) {
    let credit = 0;

    if (type === 'kağıt') {
        credit = weight * 1;
    } else if (type === 'plastik') {
        credit = weight * 1.5;
    } else if (type === 'cam') {
        credit = weight * 2;
    } else if (type === 'metal') {
        credit = weight * 2.5;
    } else if (type === 'elektronik') {
        credit = weight * 3;
    } else if (type === 'yağ') {
        credit = weight * 5;
    } else if (type === 'tekstil') {
        credit = weight * 2;
    } else if (type === 'pil') {
        credit = weight * 4;
    }

    if (sorted === 'evet') {
        credit *= 1.2; // Ayrıştırma bonusu
    }

    return credit.toFixed(2);
}
