import rateLimit from 'express-rate-limit'



// gold --- 150$ custom domain and url, unlimited request each day
// silver --- 50$ custom domain and url, 1,000,000 request each day
// bronze --- 5$  10, 000 request each day
// wood --- free 1, 000 request each day

export default (numberOfRequest: number) =>  rateLimit({
	windowMs: 0.3 * 60 * 1000, // 15 minutes
	max: numberOfRequest, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})