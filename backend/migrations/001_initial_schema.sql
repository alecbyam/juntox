-- JuntoX SARL — Initial Database Schema
-- Migration 001: Core tables for the platform

-- ═══════════════════════════════════════
-- USERS & AUTH
-- ═══════════════════════════════════════

CREATE TABLE IF NOT EXISTS users (
    id              SERIAL PRIMARY KEY,
    email           VARCHAR(255) UNIQUE NOT NULL,
    hashed_password TEXT NOT NULL,
    full_name       VARCHAR(255),
    role            VARCHAR(50) NOT NULL DEFAULT 'client'
                    CHECK (role IN ('admin', 'client', 'employe', 'investisseur', 'consultant', 'partenaire')),
    is_active       BOOLEAN DEFAULT TRUE,
    avatar_url      TEXT,
    phone           VARCHAR(50),
    company         VARCHAR(255),
    bio             TEXT,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);

-- ═══════════════════════════════════════
-- PROJECTS
-- ═══════════════════════════════════════

CREATE TABLE IF NOT EXISTS projects (
    id              SERIAL PRIMARY KEY,
    name            VARCHAR(255) NOT NULL,
    description     TEXT,
    sector          VARCHAR(100)
                    CHECK (sector IN ('ai', 'consultance', 'construction', 'logistique', 'commerce', 'formation', 'investissement', 'recherche')),
    status          VARCHAR(50) DEFAULT 'draft'
                    CHECK (status IN ('draft', 'active', 'in_progress', 'completed', 'cancelled')),
    budget          NUMERIC(15, 2),
    currency        VARCHAR(10) DEFAULT 'USD',
    owner_id        INTEGER REFERENCES users(id) ON DELETE SET NULL,
    start_date      DATE,
    end_date        DATE,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_projects_status ON projects(status);
CREATE INDEX idx_projects_sector ON projects(sector);
CREATE INDEX idx_projects_owner ON projects(owner_id);

-- ═══════════════════════════════════════
-- STUDIES & RESEARCH
-- ═══════════════════════════════════════

CREATE TABLE IF NOT EXISTS studies (
    id              SERIAL PRIMARY KEY,
    title           VARCHAR(255) NOT NULL,
    summary         TEXT,
    study_type      VARCHAR(100)
                    CHECK (study_type IN ('market_analysis', 'due_diligence', 'feasibility', 'financial', 'strategic', 'sectoral')),
    status          VARCHAR(50) DEFAULT 'in_progress'
                    CHECK (status IN ('draft', 'in_progress', 'review', 'completed', 'archived')),
    project_id      INTEGER REFERENCES projects(id) ON DELETE SET NULL,
    author_id       INTEGER REFERENCES users(id) ON DELETE SET NULL,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);

-- ═══════════════════════════════════════
-- INVESTMENTS
-- ═══════════════════════════════════════

CREATE TABLE IF NOT EXISTS investments (
    id              SERIAL PRIMARY KEY,
    name            VARCHAR(255) NOT NULL,
    description     TEXT,
    amount          NUMERIC(15, 2),
    currency        VARCHAR(10) DEFAULT 'USD',
    status          VARCHAR(50) DEFAULT 'pipeline'
                    CHECK (status IN ('pipeline', 'due_diligence', 'negotiation', 'committed', 'deployed', 'exited')),
    sector          VARCHAR(100),
    investor_id     INTEGER REFERENCES users(id) ON DELETE SET NULL,
    project_id      INTEGER REFERENCES projects(id) ON DELETE SET NULL,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);

-- ═══════════════════════════════════════
-- CONTACT MESSAGES
-- ═══════════════════════════════════════

CREATE TABLE IF NOT EXISTS contact_messages (
    id              SERIAL PRIMARY KEY,
    name            VARCHAR(255) NOT NULL,
    email           VARCHAR(255) NOT NULL,
    subject         VARCHAR(500) NOT NULL,
    message         TEXT NOT NULL,
    status          VARCHAR(50) DEFAULT 'new'
                    CHECK (status IN ('new', 'read', 'replied', 'archived')),
    user_id         INTEGER REFERENCES users(id) ON DELETE SET NULL,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_contact_status ON contact_messages(status);

-- ═══════════════════════════════════════
-- BLOG
-- ═══════════════════════════════════════

CREATE TABLE IF NOT EXISTS blog_posts (
    id              SERIAL PRIMARY KEY,
    title           VARCHAR(500) NOT NULL,
    slug            VARCHAR(500) UNIQUE NOT NULL,
    excerpt         TEXT,
    content         TEXT,
    category        VARCHAR(100),
    published       BOOLEAN DEFAULT FALSE,
    author_id       INTEGER REFERENCES users(id) ON DELETE SET NULL,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_blog_slug ON blog_posts(slug);
CREATE INDEX idx_blog_published ON blog_posts(published);

-- ═══════════════════════════════════════
-- DOCUMENTS & ASSETS
-- ═══════════════════════════════════════

CREATE TABLE IF NOT EXISTS documents (
    id              SERIAL PRIMARY KEY,
    name            VARCHAR(500) NOT NULL,
    file_url        TEXT NOT NULL,
    file_type       VARCHAR(50),
    file_size       INTEGER,
    project_id      INTEGER REFERENCES projects(id) ON DELETE CASCADE,
    uploaded_by     INTEGER REFERENCES users(id) ON DELETE SET NULL,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- ═══════════════════════════════════════
-- CRM: CONTACTS & DEALS
-- ═══════════════════════════════════════

CREATE TABLE IF NOT EXISTS crm_contacts (
    id              SERIAL PRIMARY KEY,
    full_name       VARCHAR(255) NOT NULL,
    email           VARCHAR(255),
    phone           VARCHAR(50),
    company         VARCHAR(255),
    role            VARCHAR(100),
    source          VARCHAR(100),
    notes           TEXT,
    owner_id        INTEGER REFERENCES users(id) ON DELETE SET NULL,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS crm_deals (
    id              SERIAL PRIMARY KEY,
    title           VARCHAR(255) NOT NULL,
    value           NUMERIC(15, 2),
    currency        VARCHAR(10) DEFAULT 'USD',
    stage           VARCHAR(50) DEFAULT 'lead'
                    CHECK (stage IN ('lead', 'qualified', 'proposal', 'negotiation', 'won', 'lost')),
    contact_id      INTEGER REFERENCES crm_contacts(id) ON DELETE SET NULL,
    owner_id        INTEGER REFERENCES users(id) ON DELETE SET NULL,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);

-- ═══════════════════════════════════════
-- AUDIT LOG
-- ═══════════════════════════════════════

CREATE TABLE IF NOT EXISTS audit_logs (
    id              SERIAL PRIMARY KEY,
    user_id         INTEGER REFERENCES users(id) ON DELETE SET NULL,
    action          VARCHAR(255) NOT NULL,
    resource        VARCHAR(255),
    details         TEXT,
    ip_address      VARCHAR(50),
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_audit_user ON audit_logs(user_id);
CREATE INDEX idx_audit_action ON audit_logs(action);

-- ═══════════════════════════════════════
-- AI ANALYSIS HISTORY
-- ═══════════════════════════════════════

CREATE TABLE IF NOT EXISTS ai_analyses (
    id              SERIAL PRIMARY KEY,
    analysis_type   VARCHAR(50) NOT NULL
                    CHECK (analysis_type IN ('project_analysis', 'business_plan', 'report', 'estimation', 'financial')),
    input_data      JSONB NOT NULL,
    output_data     TEXT NOT NULL,
    model_used      VARCHAR(100) DEFAULT 'gpt-4o-mini',
    tokens_used     INTEGER,
    user_id         INTEGER REFERENCES users(id) ON DELETE SET NULL,
    project_id      INTEGER REFERENCES projects(id) ON DELETE SET NULL,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_ai_user ON ai_analyses(user_id);
CREATE INDEX idx_ai_type ON ai_analyses(analysis_type);

-- ═══════════════════════════════════════
-- UPDATED_AT TRIGGER
-- ═══════════════════════════════════════

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_studies_updated_at BEFORE UPDATE ON studies FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_investments_updated_at BEFORE UPDATE ON investments FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_crm_contacts_updated_at BEFORE UPDATE ON crm_contacts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_crm_deals_updated_at BEFORE UPDATE ON crm_deals FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
