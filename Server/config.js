exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://test:testuser123@ds145895.mlab.com:45895/budget';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/test-budget';
exports.PORT = process.env.PORT || 8080;
exports.JWT_SECRET = process.env.JWT_SECRET || 'secret_string';
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';

