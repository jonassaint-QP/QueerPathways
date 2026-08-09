import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, ExternalLink, Clock } from 'lucide-react';

interface LumaEvent {
  api_id: string;
  name: string;
  description?: string;
  start_at: string;
  end_at?: string;
  url: string;
  cover_url?: string;
  geo_address_info?: { full_address?: string; city?: string };
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });

const formatTime = (iso: string) =>
  new Date(iso).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', timeZoneName: 'short' });

export default function EventsPage() {
  const [events, setEvents] = useState<LumaEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://api.lu.ma/public/v1/calendar/list-events?calendar_api_id=cal-ueIXUSOSnDJQsIS')
      .then(r => r.json())
      .then(data => {
        setEvents((data.entries || []).map((e: { event: LumaEvent }) => e.event));
        setLoading(false);
      })
      .catch(() => { setError(true); setLoading(false); });
  }, []);

  return (
    <div className="min-h-screen bg-obsidian-deep text-text-primary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-12">

        <div className="flex items-center gap-3">
          <a href="/" className="text-text-secondary hover:text-somatic-warmth transition-colors inline-flex items-center gap-1 text-xs font-mono">
            <ArrowLeft size={12} /> Home
          </a>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="text-[10px] font-mono uppercase tracking-widest text-somatic-warmth mb-3">Community</p>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-text-primary mb-4">Events &amp; Gatherings</h1>
          <p className="text-text-secondary max-w-xl leading-relaxed">
            Workshops, community sessions, and clinical education hosted by Queer Pathways. All affirming. All intentional.
          </p>
        </motion.div>

        {loading && (
          <div className="flex items-center gap-3 text-text-secondary text-sm font-mono py-16">
            <div className="w-2 h-2 rounded-full bg-somatic-warmth animate-pulse" />
            Loading events...
          </div>
        )}

        {error && (
          <div className="bg-obsidian-card border border-obsidian-border rounded-2xl p-8 text-center space-y-3">
            <p className="text-text-secondary">Could not load events right now.</p>
            <a href="https://lu.ma/queerpathways" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-somatic-warmth hover:underline text-sm">
              View on Lu.ma <ExternalLink size={12} />
            </a>
          </div>
        )}

        {!loading && !error && events.length === 0 && (
          <div className="bg-obsidian-card border border-obsidian-border rounded-2xl p-10 text-center space-y-4">
            <Calendar size={32} className="mx-auto text-text-disabled" />
            <p className="text-text-secondary">No upcoming events scheduled.</p>
            <p className="text-xs text-text-disabled font-mono">Check back soon — or subscribe to the newsletter for announcements.</p>
            <a href="https://queerpathways.substack.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-amber-400/30 text-amber-300 hover:text-amber-100 px-5 py-2 rounded-full text-sm transition-colors">
              Subscribe for updates
            </a>
          </div>
        )}

        {!loading && !error && events.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2">
            {events.map((ev, i) => (
              <React.Fragment key={ev.api_id}>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-obsidian-card border border-obsidian-border hover:border-somatic-warmth/40 rounded-2xl overflow-hidden transition-all group"
                >
                  {ev.cover_url && (
                    <img src={ev.cover_url} alt={ev.name} className="w-full h-40 object-cover" />
                  )}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-somatic-warmth">
                      <Calendar size={11} />
                      {formatDate(ev.start_at)}
                    </div>
                    <h3 className="font-display font-bold text-text-primary leading-tight">{ev.name}</h3>
                    {ev.description && (
                      <p className="text-sm text-text-secondary line-clamp-2 leading-relaxed">{ev.description}</p>
                    )}
                    <div className="flex flex-wrap gap-3 text-xs text-text-disabled font-mono">
                      <span className="flex items-center gap-1"><Clock size={10} />{formatTime(ev.start_at)}</span>
                      {ev.geo_address_info?.city && (
                        <span className="flex items-center gap-1"><MapPin size={10} />{ev.geo_address_info.city}</span>
                      )}
                    </div>
                    <a href={ev.url} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-somatic-warmth hover:text-text-primary transition-colors">
                      View Event <ExternalLink size={11} />
                    </a>
                  </div>
                </motion.div>
              </React.Fragment>
            ))}
          </div>
        )}

        <div className="rounded-2xl overflow-hidden border border-obsidian-border">
          <iframe
            src="https://lu.ma/queerpathways?embed=1"
            title="Queer Pathways Events Calendar"
            className="w-full h-[500px] bg-obsidian-card"
            frameBorder="0"
            allowFullScreen
          />
        </div>

        <div className="flex items-center justify-between py-6 border-t border-obsidian-border">
          <p className="text-xs text-text-disabled font-mono">Powered by Lu.ma · lu.ma/queerpathways</p>
          <a href="https://lu.ma/queerpathways" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-somatic-warmth/10 border border-somatic-warmth text-somatic-warmth hover:bg-somatic-warmth hover:text-obsidian-deep px-5 py-2 rounded-full text-xs font-bold font-mono uppercase tracking-widest transition-all">
            <Calendar size={12} /> Full Calendar
          </a>
        </div>
      </div>
    </div>
  );
}
