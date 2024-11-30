const flights = [
            { airline: 'Emirates', from: 'JFK', to: 'BOM', departure: '13:00', arrival: '14:20', duration: '13H 20M', type: 'NON-STOP', price: '$1,572' },
            { airline: 'Qatar Airways', from: 'JFK', to: 'BOM', departure: '13:00', arrival: '14:20', duration: '13H 20M', type: 'NON-STOP', price: '$2,072' },
            { airline: 'Lufthansa', from: 'JFK', to: 'BOM', departure: '13:00', arrival: '14:20', duration: '13H 20M', type: 'NON-STOP', price: '$1,872' },
            { airline: 'Emirates', from: 'JFK', to: 'BOM', departure: '13:00', arrival: '14:20', duration: '13H 20M', type: 'NON-STOP', price: '$1,572' }
        ];

        function renderFlights() {
            const flightResults = document.getElementById('flight-results');
            flightResults.innerHTML = flights.map(flight => `
                <div class="flight-card">
                    <img src="/placeholder.svg?height=50&width=50" alt="${flight.airline}" class="airline-logo">
                    <div class="flight-info">
                        <div class="flight-route">${flight.from} → ${flight.to}</div>
                        <div class="flight-time">${flight.departure} - ${flight.arrival} (${flight.duration})</div>
                    </div>
                    <div class="flight-type">${flight.type}</div>
                    <div>
                        <div class="flight-price">${flight.price}</div>
                        <button class="book-btn">BOOK NOW</button>
                    </div>
                </div>
            `).join('');
        }

        document.addEventListener('DOMContentLoaded', () => {
            renderFlights();

            document.querySelectorAll('.trip-type').forEach(type => {
                type.addEventListener('click', () => {
                    document.querySelectorAll('.trip-type').forEach(t => t.classList.remove('active'));
                    type.classList.add('active');
                });
            });

            document.querySelectorAll('.stop-indicator').forEach(indicator => {
                indicator.addEventListener('click', () => {
                    document.querySelectorAll('.stop-indicator').forEach(i => i.classList.remove('active'));
                    indicator.classList.add('active');
                });
            });

            document.querySelectorAll('.nav-item').forEach(item => {
                item.addEventListener('click', () => {
                    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
                    item.classList.add('active');
                });
            });

            document.querySelector('.search-btn').addEventListener('click', () => {
                alert('Search functionality would be implemented here.');
            });

            document.querySelectorAll('.book-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const flightCard = e.target.closest('.flight-card');
                    const airline = flightCard.querySelector('.airline-logo').alt;
                    const price = flightCard.querySelector('.flight-price').textContent;
                    alert(`Booking a flight with ${airline} for ${price}`);
                });
            });
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth <= 768) {
                document.querySelector('.sidebar').style.height = 'auto';
            } else {
                document.querySelector('.sidebar').style.height = '100vh';
            }
        });