# Use the official PostgreSQL base image
FROM postgres:14

# Switch to root user to install additional packages
USER root

# Install build tools and PostgreSQL development headers
RUN apt-get update && apt-get install -y \
    build-essential \
    postgresql-server-dev-14 \
    git \
    && rm -rf /var/lib/apt/lists/*

# Clone and install the pgvector extension
RUN git clone https://github.com/pgvector/pgvector.git /pgvector \
    && cd /pgvector \
    && make && make install

# Switch back to the postgres user
USER postgres

# Create the pgvector extension in the default database
# Note: This might not be possible in the Dockerfile directly due to timing issues
# Consider running this command after the container starts
