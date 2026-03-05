import './App.css';

function App() {
  return (
    <div className="invitation">

      {/* 1. 커버 */}
      <section className="cover">
        <div className="cover-photo">
          <img src="https://placehold.co/480x640/e8ddd0/9a8070?text=Photo" alt="커플 사진" />
        </div>
        <div className="cover-text">
          <p className="cover-label">WEDDING INVITATION</p>
          <h1 className="cover-names">
            <span>홍길동</span>
            <span className="cover-heart">♥</span>
            <span>김영희</span>
          </h1>
          <p className="cover-date">2026. 05. 30. SAT AM 11:00</p>
        </div>
      </section>

      {/* 2. 인사말 */}
      <section className="greeting">
        <div className="divider"><span>—</span></div>
        <p className="greeting-text">
          서로가 서로의 곁이 되어<br />
          함께 걷고자 합니다.<br />
          <br />
          소중한 분들을 모시고<br />
          작은 약속을 나누려 하오니<br />
          부디 오셔서 축복해 주시면<br />
          감사하겠습니다.
        </p>
        <div className="greeting-parents">
          <div className="parents-row">
            <span>홍○○ · 이○○의 아들</span>
            <strong>홍길동</strong>
          </div>
          <div className="parents-row">
            <span>김○○ · 박○○의 딸</span>
            <strong>김영희</strong>
          </div>
        </div>
        <div className="divider"><span>—</span></div>
      </section>

      {/* 3. 날짜 & 캘린더 */}
      <section className="calendar-section">
        <h2 className="section-title">DATE</h2>
        <p className="calendar-date-text">2026년 5월 30일 토요일 오전 11시</p>
        <div className="calendar">
          <div className="cal-header">
            <span>2026</span>
            <span className="cal-month">MAY</span>
          </div>
          <div className="cal-grid">
            {['S','M','T','W','T','F','S'].map((d, i) => (
              <div key={i} className="cal-day-name">{d}</div>
            ))}
            {/* 5월 1일 = 금요일(5번째) → 앞에 5칸 공백 */}
            {[...Array(5)].map((_, i) => <div key={`e${i}`} />)}
            {[...Array(31)].map((_, i) => (
              <div key={i} className={`cal-day ${i + 1 === 30 ? 'cal-day--active' : ''}`}>
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 오시는 길 */}
      <section className="location-section">
        <h2 className="section-title">LOCATION</h2>
        <p className="location-name">그랜드 볼룸 웨딩홀</p>
        <p className="location-address">서울특별시 강남구 테헤란로 123</p>
        <div className="map-placeholder">
          <img src="https://placehold.co/480x220/e0d8cc/9a8070?text=지도" alt="지도" />
        </div>
        <div className="transport">
          <div className="transport-item">
            <strong>지하철</strong>
            <span>2호선 강남역 3번 출구 도보 5분</span>
          </div>
          <div className="transport-item">
            <strong>버스</strong>
            <span>강남역 정류장 하차 (140, 360, 740)</span>
          </div>
          <div className="transport-item">
            <strong>주차</strong>
            <span>건물 지하 2층~4층 (3시간 무료)</span>
          </div>
        </div>
      </section>

      {/* 5. 갤러리 */}
      <section className="gallery-section">
        <h2 className="section-title">GALLERY</h2>
        <div className="gallery-grid">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="gallery-item">
              <img src={`https://placehold.co/220x220/e8ddd0/9a8070?text=${i}`} alt={`갤러리 ${i}`} />
            </div>
          ))}
        </div>
      </section>

      {/* 6. 마음 전하기 (계좌번호) */}
      <section className="account-section">
        <h2 className="section-title">마음 전하기</h2>
        <p className="account-desc">
          직접 참석이 어려우신 분들을 위해<br />
          계좌번호를 안내드립니다.
        </p>
        <div className="account-cards">
          <div className="account-card">
            <p className="account-role">신랑측</p>
            <p className="account-name">홍길동</p>
            <p className="account-number">신한은행 110-123-456789</p>
            <button className="copy-btn" onClick={() => navigator.clipboard.writeText('110-123-456789')}>
              복사
            </button>
          </div>
          <div className="account-card">
            <p className="account-role">신부측</p>
            <p className="account-name">김영희</p>
            <p className="account-number">국민은행 123-45-678901</p>
            <button className="copy-btn" onClick={() => navigator.clipboard.writeText('123-45-678901')}>
              복사
            </button>
          </div>
        </div>
      </section>

      {/* 7. 연락처 */}
      <section className="contact-section">
        <h2 className="section-title">CONTACT</h2>
        <div className="contact-grid">
          <div className="contact-group">
            <p className="contact-role">신랑</p>
            <p className="contact-name">홍길동</p>
            <a href="tel:010-1234-5678" className="contact-btn">📞 연락하기</a>
          </div>
          <div className="contact-group">
            <p className="contact-role">신랑 아버지</p>
            <p className="contact-name">홍○○</p>
            <a href="tel:010-0000-0000" className="contact-btn">📞 연락하기</a>
          </div>
          <div className="contact-group">
            <p className="contact-role">신부</p>
            <p className="contact-name">김영희</p>
            <a href="tel:010-9876-5432" className="contact-btn">📞 연락하기</a>
          </div>
          <div className="contact-group">
            <p className="contact-role">신부 아버지</p>
            <p className="contact-name">김○○</p>
            <a href="tel:010-0000-0001" className="contact-btn">📞 연락하기</a>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="footer">
        <p>2026. 05. 30</p>
        <p>홍길동 ♥ 김영희</p>
      </footer>

    </div>
  );
}

export default App;
