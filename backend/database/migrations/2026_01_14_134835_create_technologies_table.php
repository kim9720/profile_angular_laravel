<?php
// database/migrations/xxxx_create_technologies_table.php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('technologies', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')->constrained()->onDelete('cascade');
            $table->string('name')->unique(); // e.g., 'Angular'
            $table->text('description')->nullable();
            $table->timestamps();
            $table->softDeletes();
            $table->index(['category_id', 'name']); // For fast queries
        });
    }

    public function down(): void {
        Schema::dropIfExists('technologies');
    }
};
